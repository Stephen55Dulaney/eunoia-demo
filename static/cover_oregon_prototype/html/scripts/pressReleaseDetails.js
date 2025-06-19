function showPressRelease() {

    var url =window.location.search.substring(1);
    
    var pressReleaseID = url.split("=")[1];

    $("#pressReleaseTitle").append(PressReleases[pressReleaseID].Heading);

    $("#pressReleaseDetails").append("<section>" + PressReleases[pressReleaseID].Content + "</section>");
   
}