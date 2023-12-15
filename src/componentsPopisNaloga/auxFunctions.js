
export const snagaText = (nalogData) => {
    let returnedText = "";
    if(nalogData.vrstaNaloga === "povecanje") returnedText = nalogData.powerPprev + " => " + nalogData.powerPnew;
    if(nalogData.vrstaNaloga === "prikljucak") returnedText = nalogData.power;
    if(nalogData.vrstaNaloga === "razdioba2") returnedText = nalogData.powerPprev + " => " + nalogData.powerR1 + " + " + nalogData.powerR2;
    if(nalogData.vrstaNaloga === "razdioba3")  returnedText = nalogData.powerPprev + " => " + nalogData.powerR1 + " + " + nalogData.powerR2 + " + " + nalogData.powerR3;

    return returnedText;
}