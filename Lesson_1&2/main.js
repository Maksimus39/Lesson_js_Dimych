//  Create
// Read
// Update
// Delete


// data

const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true
}

// render for data

const pageTitleElement = document.createElement('h1');
pageTitleElement.append(info.title)
document.body.append(pageTitleElement);

const graduatesCountElement = document.createElement('input');
graduatesCountElement.value =info.graduatesCount
document.body.append(graduatesCountElement);

const areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);