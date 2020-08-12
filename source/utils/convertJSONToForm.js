export default (data) => {
    let form = new FormData();
    for (const key in data) {
        form.append(key, data[key]);
    }
    return form;
}