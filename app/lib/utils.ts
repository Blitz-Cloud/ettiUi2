import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// aceasta functie va fi folosita pentru a deferentia prod de dev
// pentru a realiza acest lucru se folosesc variabilele de sistem
export const GetServerUrl = function (): string {
  // return "http://localhost:3000/";
  return `api.${document.location.host}`;
};

// Aceasta functie este un wrapper pentru functia fetch, pentru a face codul mult mai vizibil
export const ApiRequest = function (
  input: URL | RequestInfo,
  init: RequestInit,
): Promise<Response> {
  return fetch(document.location.protocol + "//" + GetServerUrl() + input, {
    credentials: "include",
    ...init,
  });
};
