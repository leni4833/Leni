import Link from "next/link"

export default function Header(){
    const menulist=[{
        name:"Home",
        path:"/home",
    },{
        name:"About",
        path:"/about",
    },{
        name:"Resume ",
        path:"/resume",
    }]
    return(<>
    <div className="bg-gray-400 p-6">
        
        <ul className="flex gap-[20px] justify-end bg-gray-600 text-white">
            {menulist.map((item,index)=>{
                return(<li key={index}><Link href={item.path}>{item.name}</Link></li>)
            })}
        </ul>
    </div>

    </>)
}