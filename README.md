# Front End Coding Project

**A little context on the problem:**

As Earshot has grown the number of locations our customers want to access in a single campaign has grown - a lot. Our prior designs only comtemplated a max of 20 locations. We have a new customer who wants to target 307 7-11 locations in the US. We need to redesign our location selection dialog to support this new use case.

**Design:**

Our designer was so kind as to provide us with a design for this dialog:
![location_selection](https://cloud.githubusercontent.com/assets/213594/9950318/f053ed1a-5d7e-11e5-9777-f9a61e6d6ad5.png)

Your challenge is to implement this UI

**General guidelines and requirements:**

- You will need to provide an html file that will display a functioning dialog
- Please show the dialog working as a dropdown and hosted inline of a web page
- You can use any JS/CSS framework/3rd party library you'd like to help with this
- You only need to support the latest version of Chrome on a Mac Book
- Bonus points if design functions on other browsers/OSes
- The minimum pixel width that needs to be supported is 320px wide
- Pin graphics don't need to match the design exactly
- If you feel automated testing would help here, feel free to add it

**Features required (in order of priority):**

- All locations are displayed in the dialog
- Locations grouped by state
- Search filters locations based on all fields
- Select All/Deselect All function as expected
- Clicking "Add" Button displays ids and names of selected locations on page
- # of selected locations displayed
- Dialog works as a pop up and hosted in page
- Select All works for a state
- Ability to expand UI to be 2 columns of states plus the map
- Ability to expand UI to be 4 columns of states without the map
- Ability to shrink UI to be a single column of states without a map
- Selected locations display in a map with a red pin
- Unselected locations display in a map with a grey pin
- Collapse/expand a state (not shown in design)
- "Show Selected" zooms map to show all selected locations
- "Search as I move the map" filters locations to be based what locations are visible in the map
- Any other features you feel would be useful given the use case

**In addition to this design, we are giving you:**

- `locations.json` - a file containing 307 locations of 7-11s in the US
- The same contents of `locations.json` [hosted on S3](https://s3.amazonaws.com/public.earshotinc.com/locations.json). This will allow you to make a request to an actual website to load the data. CORS is enabled on the Bucket for all origins.
- Unlimted email support :smile:

We are looking forward to seeing what you can do. Please let us know if you have any questions
