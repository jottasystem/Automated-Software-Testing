import { isPalindrome } from "../src/functions";
import * as Controller from '../src/controller'
import { Request, Response } from "express";

const SHOULD_PASS = [
  "Rotator",
  "bob",
  "madam",
  "mAlAyAlam",
  "1",
  "Able was I, ere I saw Elba",
  "Madam I’m Adam",
  "Step on no pets.",
  "Top spot!",
  "02/02/2020",
];
const SHOULD_NOT_PASS = [
  "xyz",
  "elephant",
  "Country",
  "Top . post!",
  "Wonderful-fool",
  "Wild imagination!",
];

describe("Aula 1 - Polindromo", () => {
  it.each(SHOULD_PASS)(".check if is polindromo => %s", (a) => {
    expect(isPalindrome(a)).toBe(true);
  });

  it.each(SHOULD_NOT_PASS)(".check if is NOT polindromo => %s", (a) => {
    expect(isPalindrome(a)).toBe(false);
  });
  it('Test controller with params Ana', async () => {
    //ts-ignore
    const mockReq: any = {
      params: {
        word: "Ana"
      }
    }
    const mockRes: any = {
      status: (code: number) => {
        return { json: (message: string) => message, code }
      },
    }
    const response: any = await Controller.checkIfIsPalindromo(mockReq, mockRes)
    expect(response.isPalindromo).toBe(true);
  })
  it('Test controller with params João', async () => {
    //ts-ignore
    const mockReq: any = {
      params: {
        word: "João"
      }
    }
    const mockRes: any = {
      status: (code: number) => {
        return { json: (message: string) => message, code }
      },
    }
    const response: any = await Controller.checkIfIsPalindromo(mockReq, mockRes)
    expect(response.isPalindromo).toBe(false);
  })
  it('Test controller without params', async () => {
    //ts-ignore
    const mockReq: any = {
      params: {
        word: ""
      }
    }
    const mockRes: any = {
      status: (code: number) => {
        return { json: (message: string) => message, code }
      },
    }
    const response: any = await Controller.checkIfIsPalindromo(mockReq, mockRes)
    expect(response.message).toBe('missing data');
  })
});
