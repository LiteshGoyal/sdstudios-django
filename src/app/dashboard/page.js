import AnimatedGraph from '@/components/Graph';

export default function Dashboard() {
    return (
        <div className="flex-1 overflow-x-hidden">
            <main>
                <div className="py-6">
                    <div className="px-4 mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-9">
                            <div className="overflow-hidden bg-white border border-gray-200 divide-y divide-gray-200 lg:col-span-3 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Hey User 👋</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Here's what's happening with our Website today</p>

                                    <div className="grid grid-cols-2 mt-6 xl:mt-12 gap-x-8">
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900">83</p>
                                            <p className="mt-1 text-sm text-gray-500 font-mediume">Unique Buyers</p>
                                        </div>

                                        <div>
                                            <p className="text-2xl font-bold text-gray-900">$5,994</p>
                                            <p className="mt-1 text-sm text-gray-500 font-mediume">Current MRR</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center">
                                        <svg className="mr-2 h-2.5 w-2.5 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" r="3"></circle>
                                        </svg>
                                        <p className="text-sm font-medium text-gray-900"><span className="font-bold">8 new sales</span> has been made</p>
                                    </div>
                                </div>

                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center">
                                        <svg className="mr-2 h-2.5 w-2.5 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" r="3"></circle>
                                        </svg>
                                        <p className="text-sm font-medium text-gray-900"><span className="font-bold">7 new customers</span> has joined via email</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-6 rounded-xl">
                                <div className="px-4 pt-5 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-base font-bold text-gray-900">Sales Report</p>

                                        <button type="button" className="items-center hidden px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            <svg className="w-4 h-4 mr-1 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Export to CSV
                                        </button>
                                    </div>

                                    <div id="chart4">
                                    <AnimatedGraph />
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                        <p className="text-base font-bold text-gray-900">Traffic Sources</p>

                                        <div className="mt-4 sm:mt-0">
                                            <div>
                                                <label htmlFor="" className="sr-only"> Duration </label>
                                                <select name="" id="" className="block w-full py-0 pl-0 pr-10 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
                                                    <option>Last 7 days</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-6">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Direct</p>
                                                <p className="text-sm font-medium text-gray-900">1,43,382</p>
                                            </div>
                                            <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[60%]"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Referral</p>
                                                <p className="text-sm font-medium text-gray-900">87,974</p>
                                            </div>
                                            <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[50%]"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Social Media</p>
                                                <p className="text-sm font-medium text-gray-900">45,211</p>
                                            </div>
                                            <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[30%]"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Twitter</p>
                                                <p className="text-sm font-medium text-gray-900">21,893</p>
                                            </div>
                                            <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[15%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Activity</p>

                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center">
                                            <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female.png" alt="" />
                                            <div className="flex-1 min-w-0 ml-4">
                                                <p className="text-sm font-bold text-gray-900 truncate">Kristin Watson</p>
                                                <p className="mt-1 text-xs font-medium text-gray-500">Purchased <span className="text-indigo-600"> Pro Plan </span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-2.png" alt="" />
                                            <div className="flex-1 min-w-0 ml-4">
                                                <p className="text-sm font-bold text-gray-900 truncate">Brooklyn Simmons</p>
                                                <p className="mt-1 text-xs font-medium text-gray-500">Purchased <span className="text-indigo-600"> Developer Plan </span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-male.png" alt="" />
                                            <div className="flex-1 min-w-0 ml-4">
                                                <p className="text-sm font-bold text-gray-900 truncate">Darrell Steward</p>
                                                <p className="mt-1 text-xs font-medium text-gray-500">Purchased <span className="text-indigo-600"> Developer Plan </span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-3.png" alt="" />
                                            <div className="flex-1 min-w-0 ml-4">
                                                <p className="text-sm font-bold text-gray-900 truncate">Ronald Richards</p>
                                                <p className="mt-1 text-xs font-medium text-gray-500">Purchased <span className="text-indigo-600"> Starter Plan </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Insights</p>

                                    <div className="mt-6 space-y-3">
                                        <div className="bg-gray-100 rounded-lg">
                                            <div className="px-3 py-3">
                                                <div className="flex items-center">
                                                    <svg className="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-900"><span className="font-bold">39%</span> of our visitors are coming from X</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-100 rounded-lg">
                                            <div className="px-3 py-3">
                                                <div className="flex items-center">
                                                    <svg className="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-900">Current MRR is the <span className="font-bold">highest</span> in last 2 months</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-100 rounded-lg">
                                            <div className="px-3 py-3">
                                                <div className="flex items-center">
                                                    <svg className="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-900">Our highest growth in a day is <span className="font-bold">14 customers</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-100 rounded-lg">
                                            <div className="px-3 py-3">
                                                <div className="flex items-center">
                                                    <svg className="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-900">Our bounce rate is <span className="font-bold">54%</span> now</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 text-right">
                                        <a href="#" title="" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-gray-900">
                                            View all insights
                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-9">
                                <div className="flex items-center justify-between">
                                    <p className="flex-1 text-base font-bold text-gray-900">Latest Transactions</p>

                                    <div className="inline-flex items-center justify-end">
                                        <label htmlFor="sort" className="flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                        <select id="sort" name="sort" className="block w-full py-2 pl-1 pr-10 text-base bg-transparent border-gray-300 border-none rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                            <option>Recent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-4">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-xl">
                                                <table className="min-w-full bg-white lg:divide-y lg:divide-gray-200">
                                                    <thead className="hidden lg:table-header-group">
                                                        <tr>
                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    ID
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    Plan
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    Customer Name
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    Date
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    Price
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                            <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                <div className="flex items-center">
                                                                    Status
                                                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                    </svg>
                                                                </div>
                                                            </th>

                                                        </tr>
                                                    </thead>

                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">#29345</td>

                                                            <td className="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
                                                                <div className="inline-flex items-center">
                                                                    <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png" alt="" />
                                                                    Pro Plan
                                                                </div>
                                                                <div className="space-y-1 lg:hidden pl-11">
                                                                    <p className="text-sm font-medium text-gray-500">#29345</p>
                                                                    <p className="text-sm font-medium text-gray-500">01 January, 2025</p>
                                                                </div>
                                                            </td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">Kristin Watson</td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">01 January, 2025</td>

                                                            <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">$50.00</td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                                <div className="inline-flex items-center">
                                                                    <svg className="mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                    Complete
                                                                </div>
                                                            </td>

                                                            <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
                                                                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                    </svg>
                                                                </button>
                                                                <div className="mt-1 lg:hidden">
                                                                    <p>$59.00</p>
                                                                    <div className="inline-flex items-center justify-end mt-1">
                                                                        <svg className="mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                                            <circle cx="4" cy="4" r="3" />
                                                                        </svg>
                                                                        Complete
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        

                                                        <tr>
                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">#17482</td>

                                                            <td className="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
                                                                <div className="inline-flex items-center">
                                                                    <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-ecommerce-logo.png" alt="" />
                                                                    Starter Plan
                                                                </div>
                                                                <div className="space-y-1 lg:hidden pl-11">
                                                                    <p className="text-sm font-medium text-gray-500">#29345</p>
                                                                    <p className="text-sm font-medium text-gray-500">27 December, 2024</p>
                                                                </div>
                                                            </td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">Ronald Richards</td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">27 December, 2024</td>

                                                            <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">$25.00</td>

                                                            <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                                <div className="inline-flex items-center">
                                                                    <svg className="mr-1.5 h-2.5 w-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                    Pending
                                                                </div>
                                                            </td>

                                                            <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
                                                                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                    </svg>
                                                                </button>
                                                                <div className="mt-1 lg:hidden">
                                                                    <p>$99.00</p>
                                                                    <div className="inline-flex items-center justify-end mt-1">
                                                                        <svg className="mr-1.5 h-2.5 w-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 8 8">
                                                                            <circle cx="4" cy="4" r="3" />
                                                                        </svg>
                                                                        Pending
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}