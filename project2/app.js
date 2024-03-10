let data = [
    {
        name: 'Greg',
        skill: 'dance'
    },
    {
        name: 'Sarah',
        skill: 'sing'
    },
    {
        name: 'John',
        skill: 'drum'
    },
    {
        name: 'Tim',
        skill: 'make you laugh'
    },
    {
        name: 'Sam',
        skill: 'write poetry'
    },
    {
        name: 'Joey',
        skill: 'do magic'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return (
        '<div>'+item.name+' can '+item.skill+'.</div>'
    )
});

info.innerHTML = details.join('\n');