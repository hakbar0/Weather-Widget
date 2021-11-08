# Weather-Widget
1.	To easily create a dummy date to populate database.
2.	Created an endpoint on Firebase cloud functions. 
3.	First we must authenticate via google https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=
4.	Where key = unique key and within the body you pass… 
5.	{ "email", "password”, "returnSecureToken": true }
6.	If auth is successful you can receive an ID token.
7.	This ID token can be passed in the header Key
8.	Key: Authorization Value: Bearer + ID token
9.	URL to cloud function: https://us-central1-weather-widget-7bd6d.cloudfunctions.net/createDummy

### Installing
Won't be much use installing this repo, as it doesn't run locally. 
Runs on the cloud, unless you want to mess with Firebase Emualtors in production mode.
