const formatIndex = (i) => {
    // if (i < 10) {
    //     return `0${i + 1}.`
    // } else {
    //     return `${i + 1}.`;
    // }
    return i < 10 ? `0${i + 1}.` : `${i + 1}.`;
};

export default formatIndex;
