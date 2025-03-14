import { sleep } from '@/utils/functions'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Simple from '@/components/simple';

const components = { Simple };

export default async function RemoteMdxPage({ params }) {
    const { post } = await params;
    
    // MDX text - can be from a database, CMS, fetch, anywhere...
    await sleep(1000)
    console.log(post);
    const markdown = `
        # POST ${post}
        **desc**

        <Simple />
    `;
    return <MDXRemote source={markdown} components={components} />
}