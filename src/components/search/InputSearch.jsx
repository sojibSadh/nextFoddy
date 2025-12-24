"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

function InputSearch() {
    const router = useRouter();
    const params = useSearchParams();
    // console.log('router', router, 'params', params);


    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ correct
        let value = e.target.search.value;

      const newParams =  new URLSearchParams(params.toString());
      newParams.set("search", value);
      router.push(`?${newParams.toString()}`);

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="px-2 py-2 border border-gray-300 rounded w-2xl"
                    name="search"
                    placeholder="Enter Food Name"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 rounded-2xl text-black font-bold"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default InputSearch;
