import Skeleton from "react-loading-skeleton";

export default function Data(
    {
        isForked,
        stargazers,
        watchers,
        license,
        lastPush,
        loading
    }:
        {
            isForked: boolean,
            stargazers: number,
            watchers: number,
            license: string,
            lastPush: string,
            loading?: boolean
        }
) {

    const points = [
        {
            svg: <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-repo-forked m-auto">
                <path
                    d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>,
            title: 'Is it forked?',
            value: isForked ? 'Yes' : 'No'
        },
        {
            svg: <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                      data-view-component="true"
                      className="octicon octicon-star d-inline-block m-auto">
                <path
                    d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>,
            title: 'Stargazers',
            value: stargazers
        },
        {
            svg: <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
                      width="16" data-view-component="true"
                      className="octicon octicon-eye m-auto">
                <path
                    d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>,
            title: 'Watchers',
            value: watchers
        },
        {
            svg: <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
                      width="16"
                      data-view-component="true" className="octicon octicon-law m-auto">
                <path
                    d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
            </svg>,
            title: 'License',
            value: license
        },
        {
            svg: <svg aria-hidden="true" focusable="false" role="img"
                      className="octicon octicon-history m-auto" viewBox="0 0 16 16" width="16"
                      height="16" fill="currentColor">
                <path
                    d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
            </svg>,
            title: 'Last push',
            value: lastPush
        }
    ]

    return (
        <div className="col-span-2">
            <div className="p-4 border-t border-b md:border rounded-md grid grid-cols-3 gap-4 ">
                {
                    points.map((point, index) => (
                        <div key={index}
                             className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 ">
                            <div
                                className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black ">
                        <span
                            className="tag w-full text-center text-lg font-medium  text-gray-700 ">
                            {point.svg}
                        </span>
                            </div>
                            <div
                                className="flex flex-col items-start justify-between  text-gray-600">
                                {
                                    loading ?
                                        <>
                                            <Skeleton width={80} height={23}/>
                                            <Skeleton width={60} height={16}/>
                                        </>
                                        :
                                        <>
                                            <p className="text-[15px] text-gray-800 font-bold">{point.value}</p>
                                            <span className="text-xs  text-slated ">{point.title}</span>
                                        </>
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
