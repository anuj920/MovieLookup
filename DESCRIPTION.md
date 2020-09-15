## DESCRIPTION--

1) This Project Based on Angular CLI 10.0.7
2) In This Project, I use TMDB API (themoviedb) for the fetch of the movie list by keyword and detail of the movie.
3) In this, there are 3 main components
    - Search Component: In this, we only provide the keyword in the input field, and after that keyword data passes to the List Component for the search of the movie list for a keyword.
    - List Component: In this, we search the movie list by keyword and display the list of all movies. After clicking on any movie we pass the ID of the movie and goes to Detail Components for the fetch of detail of the movie.
    - Detail Components: In this, we fetch the detail of the movie by ID of the movie.
4) In this, I use BehaviourSubject for communication between the sibling's components.
5) In this, I use sharedService for common functions or methods and also for communication between the sibling's components.
6) In this, I use the "ngx-spinner" library to show loader Animations.
7) I also use validation at all checkpoints at fetching the data if there is No Data or Error From Server.
8) Flow work:
    - Provide a valid keyword and click on Search Button.
    - After that, a list of movie list display on left side.
    - Click on any movie item then, at the right side detail of the movie will display.