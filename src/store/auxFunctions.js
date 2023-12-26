
export const snagaText = (nalogData) => {
    let returnedText = "";
    if(nalogData.vrstaNaloga === "povecanje") returnedText = nalogData.powerPprev + " => " + nalogData.powerPnew;
    if(nalogData.vrstaNaloga === "prikljucak") returnedText = nalogData.power;
    if(nalogData.vrstaNaloga === "razdioba2") returnedText = nalogData.powerPprev + " => " + nalogData.powerR1 + " + " + nalogData.powerR2;
    if(nalogData.vrstaNaloga === "razdioba3")  returnedText = nalogData.powerPprev + " => " + nalogData.powerR1 + " + " + nalogData.powerR2 + " + " + nalogData.powerR3;

    return returnedText;
}

export const dateFormatter = (date) => {
    
  const datumNaloga = new Date (date)

  const formatiranDatum = datumNaloga.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return formatiranDatum

}

export const  compareByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    return dateB - dateA;
  };


  export const organizeEventsByMonth = (eventsArray) => {
    const eventsByMonth = {};
  
    eventsArray.forEach((event) => {
      const eventDate = new Date(event.date);
      const monthKey = `${(eventDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${eventDate.getFullYear()}`;
  
      if (!eventsByMonth[monthKey]) {
        eventsByMonth[monthKey] = [];
      }
  
      eventsByMonth[monthKey].push(event);
    });
  
    return eventsByMonth;
  };


  export const olderThan30Days = (dateString) => {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - inputDate;
  
    // Calculate the difference in days
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    // Check if the difference is greater than 30 days
    return differenceInDays > 30;
  };