# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer:

- The foreign key would be named Sightings, and it would be part of the Animal model to connect to the has_many Sightings model.

Researched answer:

- The foreign key would be named Animal and would be connect to the has_many Sightings as the foreign key to ID the animals

2. Which RESTful routes must always be passed params? Why?

Your answer:

- Create, so hackers cant hack into the website.

Researched answer:

- def create must always be passed params to protect the data being submitted into the database isnt maliscious.

3. Name three rails generator commands. What is created by each?

Your answer:

1. rails generate new model - allows you to create a new model application
2. rails generate controller - allows you to create a controller for your application.
3. rails

Researched answer:

1. rails generate new model - allows you to create a new model application
2. rails generate controller - allows you to create a controller for your application.
3. rails generate migration - adds a column to the existing model

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /users

- This GET would use the Restful route Index, to display all of the users.

method="GET" /users/1

- This GET would use the Restful route Show, to display only the single user thats at the id of 1.

method="GET" /users/new

- This GET would use the Restful route New, to create a new user instance.

method="GET" /users/edit/1

- This GET would use the Restful route Edit, to edit the existing user at the id of 1.

method="POST" /users/

- This POST would use the Restful route Create, to create a new user on our application.

method="PUT" /users/1

- This PUT would use the Restful route Update, to update the existing user items at id of 1.

method="DELETE" /users/1

- This GET would use the Restful route Destroy, to delete the user at id of 1.

5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.

1. As a developer I can create a ToDo list application.
1. As a developer I have a title and content.
1. As a developer I can add new items to the list directly.
1. As a user I can see all the items listed on the home page (index).
1. As a user I can create a new list item (new).
1. As a user I can find a certain item using its index (show).
1. As a user I can click on a button to update my items as being done or not (update).
1. As a user I can edit the items in the list(edit).
1. As a user I can delete any item on the list (destroy).
1. As a user I can go back and forth from the list page to the specific items.
