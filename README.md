# Readme


## About

The purpose of this repository is to serve as a home for any small applications that I build during my time at NSCC-COGS, or any other small apoplications that I feel would serve well as portfolio pieces.
Currently it only serves as home for a single application, but the end goal should look something like the following:

- A home page with a brief about me
  - professional experience
  - education
  - hobbies
  - navigation to other pages
    - not sure if sidebar or header bar
- Hobby showcase
  - aquariums, pens I have made et cetera
    - I know these aren't necessarily exciting, but they are a good way to showcase that I am a real person who does stuff other than just work.
- Projects/Assignments
  - This will be a sidebar with project names, and a main container
  - Selecting a project name will trigger a render that loads the chosen project into the main container

## Running this yourself

_NOTE:_
Since this is built using React, you will need to have node.js and npm installed

1. Either manually download the files or clone the repository.
2. In a terminal, navigate to the porject root
3. run `npm install`
4. run `npm start`


## Updates

I do not know how frequently I will update this repository, but I will add updates to this readme, and slowly build out a wiki as I do

### CRTY1033 Webmap 1

The purpose of this web map is to allow users to explore the energy infrastructure of North America, viewing the various types of production facilities that are available.

The chosen feature layer is the Energy Infrastructure of North America from ArcGIS Online, provided by the user MCE_Curated. It contains points that depict the locations of Energy Infrastructure in the United States, Mexico and Canada.

#### Author
Samuel Smith

#### Submission Date
January 22nd, 2024

#### DOM Manipulation

For this application DOM manipulation adds to the user experience by giving them basic interactive elements like a search bar and a popup. This allows the user to look for a power facility by name if they happen to know it and the popups give some additional (although limited) information about each facility, instead of the facility just being a marker on the map. Updating the text of the scale bar at different zoom levels is an incredibly simple text manipulation, but it allows the user to estimate distances accurately regardless of how far in (or out) they zoom.

There is still room for improvement however. By adding some simple interaction such as the ability to expand or collapse the legend, users can hide it when looking at a large group of facility markers. Similarly, the search bar could be moved to a collapsible sidebar and have additional options such as filtering for specific types of facility (hydro for example). While this may not seem like a lot, having an overly cluttered UI can be quite jarring and the more elements you add to a page, the more important it becomes that you are able to show/hide them with a simple toggle.

I don't have any sources for the above regarding DOM Manipulation as these notes are based on my own experiences in web development.

#### Data Sources

MCE_Curated. (2020, August 14). Energy Infrastructure of North America. ArcGIS Online. https://m.arcgis.com/home/item.html?id=7d955457e1774262a1d4ba4f748b5188 


