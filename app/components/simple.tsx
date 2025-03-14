'use client';

import { useState } from "react";

const Simple = () => {
    const [count, setCount] = useState(1);

    return (
        <>
            <div>Simple</div>
            <button type="button" onClick={() => setCount(state => state + 1)}>increment {count}</button>
        </>
    )
}

export default Simple;
