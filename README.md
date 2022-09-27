This is a [Express.js](https://expressjs.com/) written in [Typescript](https://www.typescriptlang.org/) that interacts with the [NewsAPI](https://newsapi.org/).

## Install

<a name="install"/>

```
npm install
```

## Run the app

<a name="run"/>

```
npm run dev
```

## Build the app

```
npm run build
```

## Start the app

```
npm run start
```

## Lint

```
npm run lint
```

## Format

```
npm run prettier-format
```

# NEWS API

Instructions for using this api, and its endpints.

## Usage

Connection to the NewsAPI requires an API Key. Please acquire oen [here](https://newsapi.org/) and add save it as an environemnt variable.

```
NEWS_API_KEY={Add key here}
```
----

## Types

### Article

    source: Source
        News publisher, reference Source type

    author: string
        author of the article

    title: string
        title of the article

    description: string
        an exerpt or short description of the article

    url: string
        a URL address to the article

    urlToImage: string
        a URL address to an image for the article

    publishedAt: string
        the date and time the article was published (UTC)

    content: string
        body of the article, shortened to 200 chars

### Source

    id: string
        identifier of the news source. Used when interacting with dependant News API

    name: string
        name of the news source/publisher

    description (optional): string
        description of the news source/publisher

    url (optional): string
        a URL address to the news source/publisher's homepage

    category (optional): string
        the type of news published by this source

    language (optional): string
        the primary language used by this news source

    country (optional): string
        the home country of this news source

----
## Endpoints

## Get list of articles based on query

### Request

`GET ${BASE_URI}/api/articles/:query/:from/:to`

    query: string
        A keyword or phrase to locate a specific article
    
    from (optional): string eg. "2022-09-24"
        The publishing date of the oldest article allowed

    to (optional): string eg. "2022-09-27"
        The publishing date of the newest article allowed

### Response

    status: string
        If the request was successful or not.

    totalResults: number
        The total results available for the request.

    articles: Article[]
        The articles matching the search params. Referece types section for more deatils.

## Get top 10 articles based on query

### Request

`GET ${BASE_URI}/api/articles/top10/:query`

    query: string
        A keyword or phrase to locate a specific article

### Response

    status: string
        If the request was successful or not.

    totalResults: number
        The total results available for the request. (By design this endpoint will only return max 10 articles regardless of totalResults)

    articles: Article[]
        The articles matching the search params. Referece types section for more deatils.

## Get articles based on query of specific article field

### Request

`GET ${BASE_URI}/api/articles/search-by/:type/:query`

    type: string
        options - (title, description or content)
        The field to restrict your query search to
    
    query: string
        A keyword or phrase to locate a specific article

### Response

    status: string
        If the request was successful or not.

    totalResults: number
        The total results available for the request.

    articles: Article[]
        The articles matching the search params. Referece types section for more deatils.

## Get top articles for specific country 

### Request

`GET ${BASE_URI}/api/top-headlines/:country`

    country: string
        options - 'ae','ar', 'at','au','be',
        'bg','br','ca', 'ch', 'cn','co', 'cu',
        'cz','de', 'eg','fr','gb','gr','hk','hu', 
        'id', 'ie', 'il', 'in', 'it','jp','kr', 
        'lt', 'lv', 'ma', 'mx','my', 'ng','nl',
        'no', 'nz', 'ph','pl', 'pt', 'ro', 'rs', 
        'ru','sa','se','sg','si','sk','th','tr',
        'tw','ua','us','ve', 'za'

        The country which you would like to search for top headlines.

### Response

    status: string
        If the request was successful or not.

    totalResults: number
        The total results available for the request.

    articles: Article[]
        The articles matching the search params. Referece types section for more deatils.

## Get top news publishers

### Request

`GET ${BASE_URI}/api/sources`


### Response

    status: string
        If the request was successful or not.

    sources: Source[]
        The sources matching the search params. Referece types section for more deatils.

