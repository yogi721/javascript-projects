# Document

    html (lang="en-US")
        head
    body

# Comment

    <!-- this is a comment -->

# Attrubutes

    title="I'm a tool tip"
    style="color:red;"
    class
    id

# formatting

    b       - Bold text
    strong  - Important
    i       - Italic
    em      - Emphasized
    mark    - Smaller
    del     - Deleted
    ins     - Inserted
    sub     - Subscript
    sup     - Superscript

# Quotation and Citation

    blockquote  - for Quotation ( <blockquote cite="link.html">text ...)
    q           - for Short Quotation
    abbr        - for Abbreviations
    address     - for contact Information
    cite        - for Work Title. Usually renders in italic
    bdo         - for Bi-Directional Override ( <bdo dir="rtl">reversed</bdo>)

# Division

    div     - block
    span    - inline
            - read : https://www.w3schools.com/html/html_blocks.asp

# Heading

    h1 h2 h3 h4 h5 h6

# Paragraph

    p

# HTML Semantic Elements

    main
    header
    nav
    section
    article
    aside
    footer
    detail
    summary
    mark
    fugure
        figcaption
    time

# HTML Multimedia

    video (controls, autoplay)
    audio (control)
        source (src="file.mp3" type="audio/mpeg")

# image

    img
        src
        alt
        <map name="workmap">
            <area shape="rect | circle | poly | default" coords="" alt="">
            read map : https://www.w3schools.com/html/html_images_imagemap.asp
    picture
        source

# link (Anchor)

    a
        href (url | mailto:someone@example.com)
        target (_self | _blank | _parent | _top)
        title
        alt

# table

    table
        caption
        tr          - row
            th      - head
        tr
            td      - data/cell

        colgroup
        col
        thead
        tbody
        tfoot

# list

    ul
        li
    ol
        li
    dl
        dt
        dd

# Forms

    form   (action. target,autocomplete="on", method=[post | get], novalidate, enctype, rel, accept-charset)
    label  (for="the name of the input element)
    input
        (type= [ text | radio | checkbox | submit | button | color | date
                | datetime-local | email | file | hidden | image | month
                | number | password | range | reset | search | tel | time
                |  url | week
            ])

        (placeholder)
        (name)      - each input field must have a name attr to be submitted.
        (value)
        (required)
        (checked)
        (readonly)
        (disabled)
        (size)
        (maxlength)
        (max)
        (min)
        (multiple) - file
        (pattern)  - "[A-Za-z]{3}"
        (step)
        (autofocus)

    button  (type [submit | reset])
    select (name="" multiple)
        option (value="", selected)
    textarea
    fieldset
    legend
    datalist
        option ( value="")
    output
    optgroup
