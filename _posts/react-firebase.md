---
title: 'Get Started with React & Google Firebase'
excerpt: 'A tutorial on setting up a React project and using Google Firebase to store your data'
coverImage: '/assets/blog/cover-photos/camping-hills.webp'
date: '2022-09-13T01:00:00.322Z'
author:
  name: Jeremy
  picture: '/assets/blog/authors/jeremy.jpeg'
ogImage:
  url: '/assets/blog/cover-photos/camping-hills.webp'
---

So you are working with React, and want a fast and easy way to house your data. While there are a ton of different ways to achieve this, the way I will be showing you involves Firebase, which is a free (up to a certain threshold) option that is quick and easy to work with.

### Setup

To get started, you’ll first need to have a React project set up. I wrote an article on how to do that, and it can be found [here](https://medium.com/@jgrice01/how-to-set-up-react-js-for-development-f2f8d8e98455)!

You will also need Node installed on your computer, so make sure it's installed by running the command node -v. If it isn’t installed, you can install it by downloading it [here](https://nodejs.org/en/download/).

Once you’ve set up your React project and have NodeJS installed, you’ll need to install Firebase. To do so, run the following command

```
npm install firebase
```

We will want to actually go into Firebase and set up a project where we will house our data. To set up our project, go to [www.firebase.google.com](www.firebase.google.com). Click on the Get started button on the main page or the Go to console button on the top right corner. You will then login with your Google account.

Once you’ve created your project, you can then set up a database. For this example, I will be using a Firestore database, which allows me to work with the REST API, which is what I am familiar with. If you’re unsure of which you should use, [here](https://blog.back4app.com/firebase-database/#What_are_the_Firebase_database_types) is a really nice breakdown of the different types and their pros & cons.

To set up your database, you will want to click on the left hand pane and open the build menu, where you will see options such as Authentication, App Check, Firestore Database, among many others. Click on Firestore database, and it will present you with the ability to create a collection to use. [Here is a breakdown of the data model in Firebase](https://firebase.google.com/docs/firestore/data-model).

Next, we will initialize Firebase in our app, and create a Firebase object. To do this, set up a file, and call it firebase.js. For the purposes of our demo, we will keep things simple and grab some data from our database and throw it onto the page.


```js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
```

Then, to actually use our Firebase config and gain access to our data, we will want to setup another file which to grab the data from the database and put it on the page:

```js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"

export default function ListFirebaseInformation() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
    }, [posts]);

    function getPosts() {
        const postCollectionReference = collection(db, 'posts');

        getDocs(postCollectionReference)
            .then(response => {

                const allPosts = response.docs.map(post => ({
                    data: post.data(),
                    id: post.id,
                }));

                setPost(allPosts);

            }).catch(error => console.log(error));
    };

    return (
        <div>
            <h4>List blog posts</h4>
            {posts.map((post) => 
                <a href={post.data.url}>{post.data.name}</a>
            )};
        </div>
    )
}
```

In the code snippet above, we are using connecting the React component to our firebase.js file. We are first fetching our posts from the database, mapping over the data and throwing it on the page.

After the 2 files above have been created, you are completely set up and good to start developing!


![alt text](https://miro.medium.com/max/640/0*_m_ETL-CboVhW6Kj.png)


While this is a basic example of how to consume data from your database, you can also push data to a database, as well as write some complex logic to work with multiple databases at the same time.