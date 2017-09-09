import { Posts } from '../../src/components/Posts';
import { renderComponent } from '../test_helper';


describe('Posts', () => {
	let component;

	beforeEach(() => {
		const posts = {
			posts: {
				"8xf0y6ziyjabvozdd253nd": {
				    id: '8xf0y6ziyjabvozdd253nd',
				    timestamp: 1467166872634,
				    title: 'This project is created using React',
				    body: '',
				    author: 'Developer',
				    category: 'react',
				    voteScore: 6,
				    deleted: false 
				},
				  "6ni6ok3ym7mf1p33lnez": {
				    id: '6ni6ok3ym7mf1p33lnez',
				    timestamp: 1468479767190,
				    title: 'What about Redux',
				    body: 'Redux is used for state management in this awesome app.',
				    author: 'Another Developer',
				    category: 'redux',
				    voteScore: 4,
				    deleted: false
				}
			}
		}
		component = mount(renderComponent(Posts, '/', posts));
	});

	it('has header named "Posts"', () => {
		expect(component.find('.panel-title').text()).to.equal('Posts');
	});

	it('has sort buttons', () => {
		expect(component.find('.sort').children('button')).to.have.length(2);
	});

	it('has "New Post" button', () => {
		expect(component.find('.new-post').text()).to.equal('New Post');
	});

	it('lists two posts', () => {
		// console.log(component.find('.list-group').debug())
		expect(component.find('.post').length).to.eq(2);
	});

	// it('shows class .app on page with filtered categories', () => {
	// 	const component = render(renderComponent(App, '/react'));
	// 	expect(component.find('.app')).to.exist;
	// });
});