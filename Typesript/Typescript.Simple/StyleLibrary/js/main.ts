namespace App {
    export function Log(message: string, ...params: any[]): void {
        console.log(message, ...params);
    }
}