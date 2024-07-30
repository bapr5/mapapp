import React from 'react'

export default function LogBox(props) {
    // useState
    const { items } = props
    return (
        <div>LogPage
            <thead>
                <tr>
                    <th>time</th>
                    <th>log</th>
                </tr>
            </thead>
            {console.log(items)}
            <tbody>
                {
                    

                    // items.map((log, i) => (
                    //     <tr key={i}>
                    //         <td>{log['time']}</td>
                    //         <td>{log['log']}</td>
                    //     </tr>
                    // ))
                }
            </tbody>
        </div>
    )
}
