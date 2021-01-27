import { nanoid } from "nanoid";
import { useState } from "react";

export function useUniqueId() {
    return useState(nanoid())[0];
}