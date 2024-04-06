function createLink(name, isDir) {
    const link = isDir ? `${name}/` : name;
    return `<a href="${link}">${name}</a><br>`;
}
module.exports = createLink;
