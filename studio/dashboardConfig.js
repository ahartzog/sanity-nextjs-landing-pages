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
                  buildHookId: '6072d7c30da39367b0be0ded',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yviq9hdn',
                  apiId: '8b3f58cd-43f8-430b-a9ff-06e3dd5d526a'
                },
                {
                  buildHookId: '6072d7c35448de777ead29db',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a8w5ombk',
                  apiId: '1fda124b-9029-4196-a584-dda2bd288ab1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahartzog/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a8w5ombk.netlify.app', category: 'apps'}
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
