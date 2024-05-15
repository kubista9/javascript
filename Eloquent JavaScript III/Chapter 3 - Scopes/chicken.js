let callCount = 0;
const maxCalls = 10; // Set a limit to prevent infinite recursion

function chicken() {
    if (callCount >= maxCalls) {
        return "chicken";
    }
    callCount++;
    return egg();
}

function egg() {
    if (callCount >= maxCalls) {
        return "egg";
    }
    callCount++;
    return chicken();
}

console.log(chicken() + " came first.");
