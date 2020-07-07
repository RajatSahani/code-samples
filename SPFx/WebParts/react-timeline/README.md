---
page_type: sample
products:
- office-sp
languages:
- javascript
- typescript
extensions:
  contentType: samples
  technologies:
  - SharePoint Framework
  platforms:
  - React
  createdDate: 07/15/2020 12:00:00 AM
---
# Timeline

## Summary 

This sample displays list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates paralleling it, and coexisting events. This web part helps to draw the timeline based from SharePoint list with pre-defined schema.

![Web part preview][figure1]

When added to SharePoint site, the source list containing timeline information, layout, date format, and sort direction can be configured from web part properties.

![SharePoint list schema][figure2]

The sample also provisions the list called "Timeline" which can be used as an example to start using the web part.

![SharePoint list sample data][figure3]

### SharePoint Asset

A SharePoint list (named "Timeline") is provisioned to store the timeline information. The schema of the list is as below.
![List Schema][figure3]

- The "Title" column stores the event title.
- The "Event Date" column represents the date of event.
- The "Picture" column stores the url of image to be displayed for the event.
- The "Link" column represents the url to event.
- The "Description" column represents the more information about the event.

The solution also provisions sample data to the "Timeline" list.
![List Sample Data][figure4]

### NPM Packages Used

Below NPM package is used to develop this sample.
1.	@pnp/sp (https://www.npmjs.com/package/@pnp/sp)

## Used SharePoint Framework Version 

![1.10.0](https://img.shields.io/badge/drop-1.10-green.svg)

## Applies to

* [SharePoint Framework Developer Preview](https://docs.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
react-timeline|[Nanddeep Nachan](https://www.linkedin.com/in/nanddeepnachan/) (SharePoint Consultant, [@NanddeepNachan](https://http://twitter.com/NanddeepNachan) )
&nbsp;|[Ravi Kulkarni](https://www.linkedin.com/in/ravi-kulkarni-a5381723/) (SharePoint Consultant)

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|July 15, 2020|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Prerequisites

- SharePoint Online tenant 
- Site Collection created under the **/sites/** or **/**

## Minimal Path to Awesome

- Clone this repo
- `npm i`
- `gulp serve --nobrowser`
- Open workbench on your tenant, i.e. https://contoso.sharepoint.com/sites/salesteam/_layouts/15/workbench.aspx
- Search and add web part "Timeline"

## Features

This sample web part displays list of events in chronological order with data stored in a SharePoint list.
- SharePoint assets provisioning
- Creating extensible services
- Using @pnp/sp


[figure1]: ./assets/webpart-preview.gif
[figure2]: ./assets/list-schema.png
[figure3]: ./assets/list-sample-data.png
