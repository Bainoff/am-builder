export const triggerElement = (element, action) => element.trigger(action)

export function deleteCookiesForSite(site) {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(site) === 0) {
            var cookieName = cookie.split("=")[0];
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }
}
