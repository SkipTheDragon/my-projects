import Skeleton from "react-loading-skeleton";

export default function (
    {
        avatar,
        login,
        bio,
        loading
    }:
        {
            avatar: string,
            login: string,
            bio: string,
            loading?: boolean
        }
) {

    return (
        <section className="text-gray-600 body-font mt-12 border-t border-b md:border rounded-md p-4">
            <div className="flex flex-col sm:flex-row ">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div
                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                             strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 stroke-blue-500"
                             viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        {avatar && <img src={avatar} className="rounded-full"
                                        alt="Avatar"/>}
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{login}</h2>
                        <div
                            className="w-12 h-1 bg-blue-500 shadow-md shadow-blue-500/20 rounded mt-2 mb-4"></div>
                        {loading ?
                            <Skeleton count={4} containerClassName="block w-full"/>
                            :
                            <p className="text-base text-slated">
                                {bio}
                            </p>
                        }
                    </div>
                </div>
                <div
                    className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 flex justify-center items-center">
                    {
                        loading ?
                            <Skeleton height={140} containerClassName="block w-full"/>
                            :
                            <img className="w-100" alt="Statistics on github"
                                 src={"https://github-readme-stats.vercel.app/api?username=" + login + "&text_bold=false&show_icons=true&theme=transparent&text_color=757575&custom_title=Contribution Statistics&title_color=424242&icon_color=757575&hide_border=true&ring_color=2196F3&card_width=600px&line_height=30"}/>
                    }

                </div>
            </div>
        </section>
    )
}
