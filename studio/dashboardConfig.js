export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e3deb5ca2994935cd3e5b16',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eptrbqbt',
                  apiId: '73412274-fbdd-4543-b9fd-bcaf001eeadd'
                },
                {
                  buildHookId: '5e3deb5c52319f5d17140f8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2fer9joe',
                  apiId: '05ebcd18-dc0b-43c9-85a9-f896a506d76f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/remorses/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2fer9joe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
