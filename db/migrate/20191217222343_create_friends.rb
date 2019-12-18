class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :location
      t.string :quote
      t.string :avatar

      t.timestamps
    end
  end
end
