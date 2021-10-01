- MVP: As a user, I can...
  - login
  - fill out a form which generates a mock html page based on my input
  - view a preview of the page and a preview of what code would be needed to create the page
  - save my personalized mock page to the database
  - view my saved pages and their html code

- Stretch: As a user, I can...
  - view the code preview of an html page AND a css page, rather than an html page with inline css
  - choose from more form options (multiple pictures, multiple fonts, etc)

- Models:
  - User (has_many :pages)
    - name:string
  - Page (belongs_to :user, belongs_to :theme)
    - title:string
    - body_text:string
    - image_url:string
    - theme_id:integer
    - user_id:integer
  - Theme (has_many :pages)
    - name:string
    - background_color:string
    - text_color:string
    - font_style: string
  
