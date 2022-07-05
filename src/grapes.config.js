function typePlugin(editor) {
  editor.Components.addType('custom', {
    isComponent: el => el.tagName === 'div' && el.class === 'test',
    model: {
      defaults: {
        tagName: 'div',
        attributes: { 'data-test': 'testing', class: 'test' },
        stylable: ['width', 'min-height'],
        traits: [
          {
            type: 'custom',
            name: 'data-test',
            label: 'Test',
            someObject: {
              test1: 1,
              test2: 2,
            }
          }
        ]
      }
    }
  })
}

export default {
  container: null,
  components: {
    tagName: 'p',
    content: 'Hello world!',
    attributes: { 'data-counter': 1 },
    traits: [{
      type: 'Counter',
      name: 'data-counter',
      label: 'Counter',
      step: 2
    }]
  },
  plugins: [typePlugin],
  showDevices: 0,
  assetManager: {
    assets: [
      {
        type: 'image',
        src: 'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
        height: 350,
        width: 250,
        name: 'displayName'
      },
      // Pass an object with your properties
      {
        type: 'image',
        src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
        height: 350,
        width: 250,
        name: 'displayName'
      },
      {
        // As the 'image' is the base type of assets, omitting it will
        // be set as `image` by default
        src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
        height: 350,
        width: 250,
        name: 'displayName'
      },
    ],
  },
  blockManager: {
    blocks: [
      {
        id: 'text',
        label: 'Text',
        category: 'test',
        activate: true,
        // content: '<div data-gjs-type="text">Insert your text here</div>',
        content: {
          type: 'custom',
          name: 'Text block',
          components: [{
            type: 'textnode',
            content: 'Insert your new text here',
          }],
        },
      },
      {
        id: 'section',
        label: '<b>Section</b>', // You can use HTML/SVG inside labels
        category: 'test',
        activate: true,
        attributes: { class: 'gjs-block-section' },
        content: `<section data-gjs-name="Call to action">
          <h1 data-gjs-name="Action title">This is a simple title</h1>
          <div data-gjs-name="Action details">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
      },
      {
        id: 'image',
        label: 'Image', // You can use HTML/SVG inside labels
        category: 'test',
        activate: true,
        content: { type: 'image' },
      },
    ],
  },
  styleManager: {
    sectors: [{
      id: 'in-vue',
      name: 'inVue',
      buildProps: ['width', 'min-height']
    },
    ]
  }
}