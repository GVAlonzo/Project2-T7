from flask import Flask, render_template, redirect
from flask_pymongo import pymongo
# from pymongo import MongoClient
# import scrape_mars
import pandas as pd
import json

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)
db = client.restaurants_db
coll = db.independents

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    

    def mongoimport():
        data = pd.read_csv('mockdata.csv')
        data_to_load = json.loads(data.to_json(orient='records'))
        coll.remove()
        coll.insert(data_to_load)
        return coll.count()

    mongoimport()

    
    print("ENDING DB INSERT")
    # Find data from the mongo database
    #mars_info = list(mission.find())

    # Return template and data
    return render_template("index.html") #, mars_info=mars_info)

# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    # mars_results = scrape_mars.scrape_info()
    # Update the Mongo database using update and upsert=True
    # independents.insert_many(mars_results)
    
    # Redirect back to home page
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
