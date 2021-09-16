// export const uniqId = () => "id" + Math.random((new Date()).getTime()).toString(16).slice(2);
// export const uniqId = () => (Math.random() * Date.now() * 100).toString(16);
export const uniqId = () => Date.now().toString(36) + Math.random().toString(36).substr(2)
