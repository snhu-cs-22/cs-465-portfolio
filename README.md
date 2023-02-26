# cs-465-portfolio

## Architecture

> Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The frontend development for the static website and the SPA have some differences. The static site used HTML templating libraries to build up the HTML that would be sent to the client, whereas the SPA makes requests for data, which it inserts into the page on the client side. Therefore, the static HTML site is a little simpler to develop and just becomes a matter of keeping track of HTML templates, whereas the SPA uses a modular site-building framework that contains a HTML file, a CSS file, and a TypeScript file for each page module in the application. However, whether it's through static HTML that gets compiled by a templating library or by transpiling HTML, CSS, and TypeScript into HTML, CSS, and JavaScript that can be rendered and displayed in the browser, both involve designing the look of the page with HTML and CSS, putting the component in the application router, and hooking it up to necessary endpoints in the rest of the application.

> Why did the backend use a NoSQL MongoDB database?

The backend used a MongoDB database because MongoDB's data interface format (BSON) can be easily translated to JSON. The reason for using a NoSQL database is because it makes the database more versatile by not needing to strictly adhere to database schemas, and in the future, NoSQL functionality will also allow for the database to be scaled horizontally through sharding, maintaining short lookup times.

## Functionality

> How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is a data interface format based on the JavaScript programming language. It ties the front and back ends together by acting as the universal data interchange format throughout the application. For example, the application's controller can easily take data from the view and use JSON to pass it to the model, and the model can likewise pass it back to the view, all using JSON as a "lingua franca" for communication between components.

> Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One part of the code I improved was adding a confirmation to the delete button in the trip listing page in the application SPA. I also refactored the HTTP method authentication in the SPA by using the more up-to-date `HTTPClient` module to simplify the passing of an authentication token via `HTTPOptions`. One benefit of having reusable UI components is that it makes unit testing really easy since each component is itself a unit. It also makes creating new components and maintaining existing ones easy, as each module has its own bundle of functionality, making it easy to create unit tests for them.

## Testing

> Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoints are the points of interaction between modules in an application where data is passed to other modules and eventually to the client or the database. This makes each endpoint easy to test, as you have expected output that you can compare against, which means that this can be part of an automated unit testing pipeline. When interacting with an application on the client side, the user uses HTTP methods to do things such as retrieve trips from the database. However, certain HTTP methods involved in CRUD operations (`GET`, `POST`, `PUT`, and `DELETE`) must involve some kind of security, as you don't want just anyone to do everything in your application (delete trips, view user data that is not their own, etc.). Therefore, this application stores authorized users and locks away these methods behind a login screen where the user inputs their username and password to access operations such as adding, editing, and deleting trips.

## Reflection

> How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Through working with Angular, Express, and Node.js, I've developed my knowledge about the HTTP protocol, become familiar with how the front and back ends of the application work, and developed an understanding of how modern websites work on the client and server sides. This will certainly help me reach my professional goals and make me a more marketable candidate by diversifying the kinds of applications I can work on, opening me up to a larger world of software.
