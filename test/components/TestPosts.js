import { Posts } from '../../src/components/Posts';
import { renderComponent } from '../test_helper';


describe('Posts', () => {
	let component;

	describe('with posts', () => {
		beforeEach(() => {
			const props = {
				posts: {
					"8xf0y6ziyjabvozdd253nd": {
					    id: '8xf0y6ziyjabvozdd253nd',
					    timestamp: 1,
					    title: 'This project is created using React',
					    body: '',
					    author: 'Developer',
					    category: 'react',
					    voteScore: 6,
					    deleted: false 
					},
					  "6ni6ok3ym7mf1p33lnez": {
					    id: '6ni6ok3ym7mf1p33lnez',
					    timestamp: 2,
					    title: 'What about Redux',
					    body: 'Redux is used for state management in this awesome app.',
					    author: 'Another Developer',
					    category: 'redux',
					    voteScore: 4,
					    deleted: false
					}
				}
			}
			component = mount(renderComponent(Posts, '/', props));
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
			expect(component.find('.post').length).to.eq(2);
		});

		it('changes order of posts when using timestamp filter', () => {
			component.find('.timestamp').simulate('click');
			expect(component.find('.post').first().find('.post-title').text()).to.equal('What about Redux');
		});

		it('changes order of posts when using vote filter', () => {
			component.find('.voteScore').simulate('click');
			expect(component.find('.post').first().find('.post-title').text()).to.equal('This project is created using React');
		});
	});

	describe('without posts', () => {

		it('returns Loading message', () => {
			component = mount(renderComponent(Posts, '/'));
			expect(component.find('.post').text()).to.equal('Loading...');
		});
	});

});