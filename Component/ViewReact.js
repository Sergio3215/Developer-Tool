import { Sandpack } from "@codesandbox/sandpack-react"

export default function ViewReact({ script }) {
    return (
        <>
            <div>
                <Sandpack
                    options={{
                        showNavigator: true,
                        showLineNumbers: true,
                        showTabs: true,
                        closableTabs: true,
                        editorHeight: 700
                    }}
                    theme="dark"
                    template ="nextjs"
                />
            </div>
        </>
    )
}