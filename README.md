# Buddy 🐻

## About 

Introducing Buddy, the app that connects internationals to locals and helps them settle into a new country for a truly authentic cultural experience! Moving to a new country can be intimidating, but with Buddy, you can quickly and easily connect with locals who are eager to share their culture and help you navigate your new home.

Whether you're an international traveler looking to immerse yourself in the local culture or a new resident seeking guidance and support, Buddy has got you covered. Our user-friendly app makes it easy to find locals who share your interests and speak your language. You can connect with them before you even arrive, so you can start building meaningful relationships and getting the support you need to make your transition smoother.

With Buddy, you can explore hidden gems, try new foods, learn the language, and so much more. Plus, our secure messaging system ensures that you can communicate with your Buddy in a safe and convenient way.

So whether you're an international traveler or a new resident, download Buddy today and start making meaningful connections with locals all over the world. Say goodbye to feeling like a tourist and hello to a whole new way of experiencing a new culture!


## Members 
**Team Members:** Ado & Estrella

## The Tech 

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


### Wireframing
Link : https://www.figma.com/file/KjxNiK5o2mjUIZ5GEQl4gp/Buddy?node-id=0%3A1&t=DCW0adTAwU3FB6vr-1


### User Stories 
Link : https://miro.com/app/board/o9J_ktbE4yk=/?share_link_id=713979444829

### MVP
- landing page (inc: mission statement, app title, (hard coded success story) footer, navigation)
- sign up entry point (redirect to using auth). 
- select either international, local user type.
- register for the site
- view confirmation page
- click to view gallary of other (international / local)
- filter view by international / local
 

### Stretch
- additional filters on gallary page e.g. languages?
- view user profile
- ability to email selected user
- email form 
- cute confirmation that email is sent
- carosel for success stories viewable on landing page. 

-------

## Views (Client Side)
| name | purpose |
| --- | --- |

## Reducers (Client Side)
| name | purpose |
| --- | --- |
| international | Store the array of International users (from db) |
| local | Store the array of Local users (from db) |

## Actions (Client Side)

### International 
| type | data | purpose |
| --- | --- | --- |
| GET_INTUSERS | users[] | |
| DEL_INTUSER| international user | |
| ADD_INTUSER | international user | |
| UPDATE_INTUSER | international user | |

### Local 
| type | data | purpose |
| --- | --- | --- |
| GET_LOCALUSERS | users[] | |
| DEL_LOCALUSER| local user | |
| ADD_LOCALUSER | local user | |
| UPDATE_LOCALUSER |local user | |




## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/v1/buddy | Yes | Get the list of all the users | Array of Objects (object = users) |
| Get | /api/v1/buddy/:id | Yes | Get single user data by id | A single Object (object = userData by id) |
| Post | /api/v1/buddy/ | Yes | Save a completed new user data profile| the data that has been saved in db read format |
| Delete | /api/v1/buddy/:id | Yes | Delete a user data profile| Delete from db by Id |
| Patch | /api/v1/buddy/:id | Yes | Update a user data profile | Update the User data by Id in db|



## DB (Server Side) 
  There should be one table for MVP.
  
### users
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each international and local users|
  | user_name | String | user name users when they are done signing up through Auth0|
  | first_name | String | First Name of the user as personal detail |
  | last_name | String | Last Name of the user as personal detail  |
  | email | String | Contact email of the user which will be used for the communication|
  | age | String | Age of the user as personal detail |
  | country_origin | String | User's country origin as personal detail |
  | city | String | City where the user come from as personal detail |
  | user_status | String | Whether the user is international or local, It will be two values: International or Local |
  | prim_language | String | Their primary language speaking everyday|
  | english_level | String | How good their english leve, It will be three values: no english, some english, and fluent english |
  | sharing_one | String | User's Interest Both for Local and International |
  | sharing_two | String | User's Interest Both for Local and International  |
  | sharing_three | String | User's Interest Both for Local and International |
  | description | String | User's Short Bio Both for Local and International |
  | profile_img | String | User's profile picture Both for Local and International |
  | auth_id | String | to validate Users because we are using Auth0|
  
  








