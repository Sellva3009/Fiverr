Github
    Github is the hub for storing the code and spread through big teams

    Initialize the git by running "git init" command
    git status - check for the latest changes
    git add <filename> - To add the changed file name to the branch
    git add * or git add . - to add all files changed
    git commit -m "message" - to snapshot all files to the branch
    git log - To check for the latest commit id and other info
    git checkout <commit id> - temporiarly moved back to commit <id>
    git revert <commit id> - revert the changes of commit id (by creating new commit)
    git reset --hard - undo commits upto commit id by deleting commits

    git branch <branch name> - To create new branch
    git checkout -b <branch name> - To create new branch and checkout new branch
    git checkout <branch name> -  To switch to new branch
    git branch -D <branch name> - To delete the branch
    
    For merging the changes - 
    Switch to main branch by running the command 'git merge <main branch>
    git merge <branch which need to merge> - to merge the content from the featured branch to main branch

    Pushing code from local to github
    git remote add origin <your repo link> - link the github repo with local
    git push - to push the code
    git remote set-url origin <your repo link> - To autheticate your local to the github

Fiverr App 
    React 18, Vite, Sass, ESLint

    ESLink - To catch errors quickly

    To install ESLint
        - npm add eslint --dev
        - npx eslint --init

    - Creating all the pages
     - home
     - gigs
     - gig
     - login
     - add
     - message
     - messages
     - myGigs
     - orders
     - register
    
    Note - All pages and Components should create inside the src folder

    - Creating Components
     - Navbar
      - Sticky navbar 
       - changed color and sticky while scroll
        - used useState and useEffect
         - useState used for changing the state
         - useEffect used for changing the state based on the scroll
     - React Router Dom
      - used createBrowserRouter, RouterProvider
       - create router variable and created route using createBrowserRouter method and assign it to RouterProvider
       - Here header and footer will not change, so we will using the Outlet method from react-router-dom
        - Create Layout function and assign outlet architecture and assign to root path in the createBrowserRouter method. Other routes will be there under children
      - useLocation method is used to navigate the pages based on the url

    - Featured component 
     - Create featured component in the component folder
     - added required styles
     - added public/img folder
     - Feature section with dark background

    - TrustedBy Component
     - Create trustedby component and styles

    - Slide Component
     - Create slide component and styles
     - Create slider plugins (infinite react carousel)
     - Create CatCard component for the slider data
     - Passing the data (data.js) and props from the Home page to Slider component
     - Created projectSlider with styles
    
    - Footer
     - Added content and styles
    