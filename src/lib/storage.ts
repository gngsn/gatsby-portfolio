function checkLocalStorage() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

class FallbackStorage {
    fallbackStorage: {
        [key: string]: string;
    } = {};

    valid: boolean = checkLocalStorage();

    setItem(key: string, value: unknown) {
        const string = JSON.stringify(value);
        if (typeof window !== "undefined" && this.valid) {
            localStorage.setItem(key, string);
            return;
        }
        this.fallbackStorage[key] = string;
    }

    getItem(key: string) {
        const value = typeof window !== "undefined" && this.valid
            ? localStorage.getItem(key)
            : this.fallbackStorage[key];
        try {
            const parsed = JSON.parse(value || '');
            return parsed;
        } catch (e) {
            return null;
        }
    }

    removeItem(key: string) {
        if (typeof window !== "undefined" && this.valid) {
            localStorage.removeItem(key);
            return;
        }
        delete this.fallbackStorage[key];
    }
}

const storage = new FallbackStorage();

export default storage;
