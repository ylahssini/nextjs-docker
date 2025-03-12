'use client'

import { useState } from "react"

const GenerateNum = ({ generate }) => {
    const [num, setNum] = useState(1);

    function handleChange(element) {
        setNum(element.target.value);
    }

    async function handleFetch() {
        await fetch(`/nums/${num}`);
    }

    return (
        <>
            <form action={generate}>
                <input name="num" type="num" value={num} onChange={handleChange} />
                <button>Generate</button>
            </form>

            <button type="button" onClick={handleFetch}>fetch</button>
        </>
    );
}

export default GenerateNum;