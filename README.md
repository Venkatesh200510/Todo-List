This is a Simple JS project made using Tailwind CSS
You can run this by installing tailwind css cli

1)npm install tailwindcss @tailwindcss/cli

Create a file named input.css in src folder ->src/input.css 
and copy this,
 @import "tailwindcss";

 then link the style sheet in html,
  
  <link href="./output.css" rel="stylesheet">

 Finally run this command in terminal,
  npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
  

  if you don't want to run the above command everytime just copy it in package.json file in script section below error message

  "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/style.css --watch"

  then run,
    npm run dev 
    here you don't need to run repeatedly
