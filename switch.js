const month= process.argv[2];

switch (month){
    case 'jan':
        console.log("this is first month");
        break;

    case 'feb':
        console.log("this is the second month");
        break;

    case 'dec':
        console.log('this is the last month');
        break;

    default:
        console.log('onr of the months');
}