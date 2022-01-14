# Project2-T7
Repository for Project 2 - Team 7


### PREREQUISITES

- Local installation of MongoDB
- Valid MapBox API key (store in `/static/js/config.js`)
- Install the FLASK-CORS package: In *GitBash*, type `$ pip install -U flask-cors`
- Python file is run in the Anaconda virtual environment. Install this package manager first.


1. Navigate to the folder that contains ``app.py`` and launch a GitBash (Windows) or Terminal (Mac). 
1.  To start in the virtual environment,``source activate PythonData38`` and then hit `ENTER`.
1. Type ``python app.py`` which contains the flask app and accompanying functions and then hit `ENTER`.
1. Observe that the Flask server starts and tells you which port it's running on. Don't close this window.
![GiBash terminal](/templates/Images/GitBash_screenshot.PNG)
3. With the Flask server running, enter this address in your Chrome browser: http://127.0.0.1:5000/or (localhost:5000/).
4.On the homepage find various visualizations that can be manipulated (see image below). 
5.Additionaly, navigate to the to the follwoing routes to view the jsonified data returned from the Mongo Database.  
 
        f"<br>\/ Return JSON list ALL restaurant data \/<br/>"
        f"/api/v1.0/alldata<br/>"
        f"<br>\/ Return JSON list of TOP TEN restaurant data \/<br/>"
        f"/api/v1.0/topten<br/>"
        f"<br>\/ Return JSON list of DISTINCT CITIES \/<br/>"
        f"/api/v1.0/distinctcities<br/>"        
        f"<br>\/ Return JSON list of SALES AND CITIES \/<br/>"
        f"/api/v1.0/salesandcities<br/>"
        f"<br>\/ Return JSON list of SALES AND STATES \/<br/>"
        f"/api/v1.0/salesandstates<br/>"
        f"<br>\/ Return JSON list of COUNT BY CITIES \/<br/>"
        f"/api/v1.0/countbycities<br/>"
        f"<br>\/ Return JSON list of COUNT BY STATES \/<br/>"
        f"/api/v1.0/countbystates<br/>"
        f"<br>\/ Return JSON list of AVG CHECK AND MEALS SERVED BY STATES \/<br/>"
        f"/api/v1.0/checkmealsbystates<br/>"
        
  
### Navigating the homepage
![Upon landing on the homepage find the following layout](/templates/Images/Site_screenshot.PNG)
-Clicking on the thumbnail of the US will load the localhost/cluster




### Notes on the Flask app
