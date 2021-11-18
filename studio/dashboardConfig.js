export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619671d3822e2f4443f3fefe',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-iekcuy1k',
                  apiId: '38a4901b-94e2-462c-bb85-29a0a06cb543'
                },
                {
                  buildHookId: '619671d322e9ab5be7faefd1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-w9yc38cq',
                  apiId: 'e2680498-4a67-4dd5-a308-460580fff0e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ncc553/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-w9yc38cq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
