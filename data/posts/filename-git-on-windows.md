---
layout: post
title:  "Filenames and Git on Windows"
description: Filename problems with Git on Windows
date:   2017-09-27 21:30:00 +0100
categories: Git
---

Today I wanted to manually deploy a [Create React App](https://github.com/facebookincubator/create-react-app) project to Github Pages. Now, normally this happens via Travis CI after each build, but this time I wanted to manually verify something. Luckily, this is pretty easy with CRA. If you installed the "gh-pages" packages and added the required script to package.json you only need to execute the deploy script and you are good to go.

## The Problem

But this time, I ran into a rather strange problem:

```bash
λ npm run deploy                                                                                                                   
                                                                                                                                   
> bool@1.0.0 predeploy E:\projects\bool                                                                                            
> npm run build                                                                                                                    
                                                                                                                                   
                                                                                                                                   
> bool@1.0.0 build E:\projects\bool                                                                                                
> react-scripts build                                                                                                              
                                                                                                                                   
Creating an optimized production build...                                                                                          
Compiled successfully.                                                                                                             
                                                                                                                                   
File sizes after gzip:                                                                                                             
                                                                                                                                   
  50.73 KB  build\static\js\main.54678454.js                                                                                       
  658 B     build\static\css\main.5c98f198.css                                                                                     
                                                                                                                                   
The project was built assuming it is hosted at /bool/.                                                                             
You can control this with the homepage field in your package.json.                                                                 
                                                                                                                                   
The build folder is ready to be deployed.                                                                                          
To publish it at https://zlypher.github.io/bool, run:                                                                              
                                                                                                                                   
  npm run deploy                                                                                                                   
                                                                                                                                   
                                                                                                                                   
> bool@1.0.0 deploy E:\projects\bool                                                                                               
> gh-pages -d build                                                                                                                
                                                                                                                                   
error: unable to create file deployed at Mon Sep 25 18:25:02 UTC 2017 by Deployment Bot (from Travis CI): Invalid argument         
fatal: Could not reset index file to revision 'origin/gh-pages'.                                                                   
                                                                                                                                   
npm ERR! code ELIFECYCLE                                                                                                           
npm ERR! errno 1                                                                                                                   
npm ERR! bool@1.0.0 deploy: `gh-pages -d build`npm ERR! Exit status 1                                                              
npm ERR!                                                                                                                           
npm ERR! Failed at the bool@1.0.0 deploy script.                                                                                   
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.                                 
```

If you read the log carefully, you will see that the script "gh-pages -d build" fails. Even "git checkout gh-pages" fails with the same error.

Now if you've already used Travis CI to deploy th GH pages, you will be aware, that it creates a file with the timestamp of the deployment. In this example this files is conveniently named "Mon Sep 25 18:25:02 UTC 2017 by Deployment Bot (from Travis CI)".

## The Solution

As it turns out, Windows really dislikes colons (":") in file names and prohibits them. So git can't create the file during checkout of the branch and fails with an "Invalid argument". In my case, manually deleting the file via github.com resolved the issue. Afterwards, the deployment script completed successfully.