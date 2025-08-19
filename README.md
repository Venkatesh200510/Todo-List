This is a Simple JS project made using Tailwind CSS
You can run this by installing tailwind css cli

1) npm install tailwindcss @tailwindcss/cli

Create a file named input.css in src folder ->src/input.css 
and copy this,
2) @import "tailwindcss";

 then link the style sheet in html,
  
3)  <link href="./output.css" rel="stylesheet">

 Finally run this command in terminal,
4) npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
  
---------------------------------------------------------------------------------------------------------------------------------------------------
  if you don't want to run the above command everytime just copy it in package.json file in script section below error message

1) "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/style.css --watch"

  then run,
2) npm run dev 
    here you don't need to run repeatedly
