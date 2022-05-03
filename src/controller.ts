import { Request, Response } from "express";
import { isPalindrome } from './functions'
export async function checkIfIsPalindromo(req: Request, res: Response) {
    const { word } = req.params
    if (!word) {
        return res.status(400).json({
            message: "missing data"
        });
    }
    if (isPalindrome(word)) {

        return res.status(200).json({ isPalindromo: true })
    } else {
        return res.status(200).json({ isPalindromo: false })
    }
}